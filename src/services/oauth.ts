import { SocialPlatform } from '../types';

export const handleOAuthCallback = async (platform: SocialPlatform, code: string) => {
  try {
    const clientId = import.meta.env[`VITE_${platform.toUpperCase()}_CLIENT_ID`];
    const clientSecret = import.meta.env[`VITE_${platform.toUpperCase()}_CLIENT_SECRET`];
    const redirectUri = import.meta.env.VITE_OAUTH_REDIRECT_URI;

    // Exchange code for access token
    const tokenResponse = await fetch(`/api/oauth/${platform}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to get access token');
    }

    const tokenData = await tokenResponse.json();
    
    // Store the access token securely
    localStorage.setItem(`${platform}_token`, tokenData.access_token);
    
    // Store refresh token if provided
    if (tokenData.refresh_token) {
      localStorage.setItem(`${platform}_refresh_token`, tokenData.refresh_token);
    }

    return tokenData;
  } catch (error) {
    console.error('OAuth error:', error);
    throw error;
  }
};

export const refreshToken = async (platform: SocialPlatform) => {
  try {
    const refreshToken = localStorage.getItem(`${platform}_refresh_token`);
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const clientId = import.meta.env[`VITE_${platform.toUpperCase()}_CLIENT_ID`];
    const clientSecret = import.meta.env[`VITE_${platform.toUpperCase()}_CLIENT_SECRET`];

    const response = await fetch(`/api/oauth/${platform}/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'refresh_token',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    const tokenData = await response.json();
    localStorage.setItem(`${platform}_token`, tokenData.access_token);
    
    if (tokenData.refresh_token) {
      localStorage.setItem(`${platform}_refresh_token`, tokenData.refresh_token);
    }

    return tokenData;
  } catch (error) {
    console.error('Token refresh error:', error);
    throw error;
  }
};

export const revokeAccess = async (platform: SocialPlatform) => {
  try {
    const token = localStorage.getItem(`${platform}_token`);
    if (!token) {
      throw new Error('No access token found');
    }

    const response = await fetch(`/api/oauth/${platform}/revoke`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to revoke access');
    }

    // Clear stored tokens
    localStorage.removeItem(`${platform}_token`);
    localStorage.removeItem(`${platform}_refresh_token`);

    return true;
  } catch (error) {
    console.error('Access revocation error:', error);
    throw error;
  }
};