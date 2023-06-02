function validator(option) {

    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector('.form-message');

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.querySelector('.form-message').classList.add('invalid');
        }
        else {
            errorElement.innerText = "";
            inputElement.parentElement.querySelector('.form-mesage').classList.remove('invalid');
        }
    }

    var formElement = document.querySelector(option.form);
    if (formElement) {
        option.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }
            }

        });
    }
}


validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập họ và tên';
        }
    }

}

validator.isIDname = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập tên tài khoản';
        }
    }
}

validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            return mailformat.test(value) ? undefined : 'Vui lòng nhập đúng Email'
        }
    }

}

validator.isNumber = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var phonenumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            return phonenumber.test(value) ? undefined : 'Vui lòng nhập số điện thoại của bạn'
        }
    }
}

validator.isPassW = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập mật khẩu';
        }
    }

}

const hiddenpassw = 
    document.querySelector('#hidden-password');
const userpassword =
    document.querySelector('#user-password');

hiddenpassw.addEventListener('click',function(){
    this.classList.toggle("fa-eye");
    type = userpassword.getAttribute("type")
    === "text" ? "password" : "text";
    userpassword.setAttribute("type", type)
});

var help = document.getElementById("help-header")

help.addEventListener('click', function(){
    window.location.href="https://help.shopee.vn/portal"
})