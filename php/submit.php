<?php
$servername = "localhost";
$username   = "h330733_memaryar_user"; // نام کاربری دیتابیس
$password   = "پسورد دیتابیس";         // رمز دیتابیس
$dbname     = "h330733_memaryar_db";   // نام دیتابیس

// اتصال به دیتابیس
$conn = new mysqli($servername, $username, $password, $dbname);

// بررسی خطا
if ($conn->connect_error) {
    die("ارتباط با دیتابیس برقرار نشد: " . $conn->connect_error);
}

// گرفتن داده‌های فرم
$fullname     = $_POST['fullname'];
$nationalCode = $_POST['national_id'];
$phone        = $_POST['phone'];
$email        = $_POST['email'];

// آماده‌سازی و اجرای کوئری
$stmt = $conn->prepare("INSERT INTO enrollment (FullName, NationalCode, PhoneNumber, Email) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $fullname, $nationalCode, $phone, $email);

if ($stmt->execute()) {
    echo "✅ ثبت‌نام با موفقیت انجام شد!";
} else {
    echo "❌ خطا در ثبت‌نام: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
