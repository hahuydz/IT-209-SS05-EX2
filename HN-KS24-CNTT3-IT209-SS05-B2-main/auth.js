/**
 * Module Authentication - Session 05 Bài 2
 * Học viên: Hoàng Thiện Sơn (Boizi-06)
 * Lớp: HN-KS24-CNTT3 / IT214
 */

// Hàm đăng nhập
function login(username, password) {
    if (!username || !password) {
        throw new Error("Tên người dùng và mật khẩu không được để trống!");
    }
    console.log(`Đang xác thực người dùng: ${username}...`);
    return {
        id: 1,
        username: username,
        role: "admin",
        token: "jwt_token_sample_12345"
    };
}

// Hàm đăng xuất
function logout(userId) {
    console.log(`Người dùng ${userId} đã đăng xuất.`);
    return true;
}

// Các hàm tiện ích (Utility functions)
function hashPassword(password) {
    return `hashed_${password}_salt_secure`;
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

module.exports = {
    login,
    logout,
    hashPassword,
    validateEmail
};

// fix typo

// adds utility functions
