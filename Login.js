document.getElementById('LoginForm').addEventListener('submit', function(event) {
    // منع تنفيذ السلوك الافتراضي للنموذج
    event.preventDefault();
  
    // فحص قيمة المدخلات
    const usernameValue = document.getElementById('username').value;
    const passwordValue = document.getElementById('password').value;
    
    if (usernameValue === 'admin' && passwordValue === 'admin') {
      // إذا كانت القيمتان تساويان 'admin'
      // قم بتنفيذ الأمر هنا
        alert('تم تسجيل الدخول بنجاح');
        window.location.href = ("Home.html");
    } else {
        // إذا كانت القيمتان لا تساويان 'admin'
        // قم باتخاذ إجراء آخر هنا، مثلاً عرض رسالة خطأ
        alert('هناك خطأ ما، اسم المستخدم أو كلمة المرور غير صحيح');
    }
  });
  