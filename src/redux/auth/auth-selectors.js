export const selectAuthLoading = (state) => state.auth.isLoading;

export const selectAuthError = (state) => state.auth.error;

export const selectIsLogin = (state) => state.auth.isLogin;

export const selectUser = (state) => state.auth.user;

export const selectAccessToken = (state) => state.auth.accessToken;

export const selectRefreshToken = (state) => state.auth.refreshToken;

export const selectIsUpdate = (state) => state.auth.isUpdate;
