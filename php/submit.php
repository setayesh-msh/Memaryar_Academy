<?php
$servername = "localhost";
$username   = "h330733_memaryar_user"; // نام کاربری دیتابیس
$password   = "Me*88*mar@yar";               // رمز دیتابیس
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
    // موفقیت: پیام + بازگشت به index.html
    echo "<script>
        alert('✅ ثبت‌نام با موفقیت انجام شد');
        window.location.href='index.html';
    </script>";
} else {
    // خطا: پیام + بازگشت به index.html
    echo "<script>
        alert('❌ خطا در ثبت‌نام: " . $stmt->error . "');
        window.location.href='index.html';
    </script>";
}

$stmt->close();
$conn->close();
?>
