function addKeyValue(obj, key, data) {
    obj[key] = data;
}
function addAccount() {
    var username = document.getElementById("addAccountUsername").value
    var password = document.getElementById("addAccountPassword").value
    var numberPhone = document.getElementById("addAccountPhone").value
    var email = document.getElementById("addAccountEmailAddress").value
    var firstName = document.getElementById("addAccountFirstName").value
    var lastName = document.getElementById("addAccountLastName").value
    var role = document.getElementById("addAccountRoles").value
    var address = document.getElementById("addAccountAddress").value
    var checkEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var checkNumber = /^[0-9]\d*(?:\.\d+)?(?:[kmbt])?$/;
    if (!checkEmail.test(email)) {
        bootbox.alert({
            message: "Hãy nhập địa chỉ email hợp lệ.\nExample@gmail.com!",
            className: 'bb-alternate-modal'
        })
        email.focus;
        return false;
    }
    if (!checkNumber.test(numberPhone)) {
        bootbox.alert({
            message: "Hãy nhập số điện thoại hợp lệ.",
            className: 'bb-alternate-modal'
        })
        numberPhone.focus;
        return false;
    }
    var formData = {};
    addKeyValue(formData, 'username', username);
    addKeyValue(formData, 'password', password);
    addKeyValue(formData, 'numberPhone', numberPhone);
    addKeyValue(formData, 'email', email);
    addKeyValue(formData, 'firstName', firstName);
    addKeyValue(formData, 'lastName', lastName);
    addKeyValue(formData, 'role', role);
    addKeyValue(formData, 'address', address);

    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/quan-ly-tai-khoan"

    $.ajax({
        url: baseUrl + '/account',
        type: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        data: JSON.stringify(formData),
        success: function (result) {
            bootbox.alert({
                message: "Thêm tài khoản thành công!",
                className: 'bb-alternate-modal',
                callback : () => {
                    window.location.replace(api_url);
                }
            });
            

        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "Không thể thêm!",
                    className: 'bb-alternate-modal'
                });
            };
        }
    });

}

// Update Account 
var updateAccount = null;
function editAccount(data) {
    updateAccount = data
}
function UpdateAccount(data) {

    var numberPhone = document.getElementById("update" + updateAccount + "Phone").value
    var email = document.getElementById("update" + updateAccount + "EmailAddress").value
    var firstName = document.getElementById("update" + updateAccount + "FirstName").value
    var lastName = document.getElementById("update" + updateAccount + "LastName").value
    var role = document.getElementById("update" + updateAccount + "Roles").value
    var address = document.getElementById("update" + updateAccount + "Address").value
    var checkEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var checkNumber = /^[0-9]\d*(?:\.\d+)?(?:[kmbt])?$/;
    var formData = {};
    if (email) {
        if (!checkEmail.test(email)) {
            bootbox.alert({
                message: "Hãy nhập địa chỉ email hợp lệ.\nExample@gmail.com!",
                className: 'bb-alternate-modal'
            })
            email.focus;
            return false;
        }
    }
    if (numberPhone) {
        if (!checkNumber.test(numberPhone)) {
            bootbox.alert({
                message: "Hãy nhập số điện thoại hợp lệ.",
                className: 'bb-alternate-modal'
            })
            numberPhone.focus;
            return false;
        }
    }
    if (numberPhone)
        addKeyValue(formData, 'numberPhone', numberPhone);
    if (email)
        addKeyValue(formData, 'email', email);
    if (firstName)
        addKeyValue(formData, 'firstName', firstName);
    if (lastName)
        addKeyValue(formData, 'lastName', lastName);
    if (!role)
        addKeyValue(formData, 'role', role);
    if (address)
        addKeyValue(formData, 'address', address);
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/quan-ly-tai-khoan"

    $.ajax({
        url: baseUrl + '/account/' + data,
        type: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        data: JSON.stringify(formData),
        success: function (result) {
            bootbox.alert({
                message: "Cập nhật tài khoản thành công!",
                className: 'bb-alternate-modal',
                callback : () => {
                    window.location.replace(api_url)
                }
            });
            


        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "'Không thể cập nhật.Hãy xem lại!",
                    className: 'bb-alternate-modal '
                });
            };
        }
    });
}

function deleteAccount(data) {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/quan-ly-tai-khoan"
    $.ajax({
        url: baseUrl + '/account/' + data,
        type: 'DELETE',
        success: function (result) {
            bootbox.alert({
                message: "Xóa tài khoản " + data + " thành công",
                className: 'bb-alternate-modal',
                callback : () => {
                    window.location.replace(api_url)
                }
            });

        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "'Không thể xóa tài khoản!",
                    className: 'bb-alternate-modal'
                });
            };
        }
    });
}

function updatePersonAccount() {
    var username = document.getElementById("usernameChangePass").value
    var numberPhone = document.getElementById("numberPhoneChangePass").value
    var email = document.getElementById("emailChangePass").value
    var checkEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var checkNumber = /^[0-9]\d*(?:\.\d+)?(?:[kmbt])?$/;

    if (email) {
        if (!checkEmail.test(email)) {
            bootbox.alert({
                message: "Hãy nhập địa chỉ email hợp lệ.\nExample@gmail.com!",
                className: 'bb-alternate-modal'
            })
            email.focus;
            return false;
        }
    }
    if (numberPhone) {
        if (!checkNumber.test(numberPhone)) {
            bootbox.alert({
                message: "Hãy nhập số điện thoại hợp lệ.",
                className: 'bb-alternate-modal'
            })
            numberPhone.focus;
            return false;
        }
    }
    var firstName = document.getElementById("firstNameChangePass").value
    var lastName = document.getElementById("lastNameChangePass").value
    var address = document.getElementById("addressChangePass").value
    var formData = {};

    if (numberPhone)
        addKeyValue(formData, 'numberPhone', numberPhone);
    if (email)
        addKeyValue(formData, 'email', email);
    if (firstName)
        addKeyValue(formData, 'firstName', firstName);
    if (lastName)
        addKeyValue(formData, 'lastName', lastName);
    if (address)
        addKeyValue(formData, 'address', address);
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/tai-khoan-ca-nhan"

    $.ajax({
        url: baseUrl + '/account/' + username,
        type: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        data: JSON.stringify(formData),
        success: function (result) {
            bootbox.alert({
                message: "Cập nhật tài khoản thành công!",
                className: 'bb-alternate-modal',
                callback : () => {
                    window.location.replace(api_url);
                }
            });


        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "'Không thể cập nhật.Hãy xem lại!",
                    className: 'bb-alternate-modal '
                });
            };
        }
    });
}


//-----------------Hoàn cảnh khó khăn---------------------
function addHC() {
    var name      = document.getElementsByName('name')[0].value      
    var address   = document.getElementsByName('address')[0].value
    var numberChild = document.getElementsByName('numberChild')[0].value
    var disadvantagedContent = myEditor.getData();
    var formData = {};
    
    addKeyValue(formData, 'name', name);
    addKeyValue(formData, 'address', address);
    addKeyValue(formData, 'numberChild', numberChild);
    addKeyValue(formData, 'disadvantagedContent', disadvantagedContent);
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/quan-ly-hoan-canh-kho-khan"
    $.ajax({
        url: baseUrl + '/them-hoan-canh-kho-khan',
        type: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        data: JSON.stringify(formData),
        success: function (result) {
            bootbox.alert({
                message: "Thêm Hoàn cảnh khó khăn thành công!",
                className: 'bb-alternate-modal',
                callback: function () {
                    window.location.replace(api_url);
                }
            });

        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "Không thể thêm.Vui lòng kiểm tra lại!",
                    className: 'bb-alternate-modal'
                });
            };
        }
    });
}

function editHC() {

    var idHC = document.getElementById("idHC").name;

    var name      = document.getElementsByName('name')[0].value      
    var address   = document.getElementsByName('address')[0].value
    var numberChild = document.getElementsByName('numberChild')[0].value
    var disadvantagedContent = myEditor.getData();
    var formData = {};
    
    addKeyValue(formData, 'name', name);
    addKeyValue(formData, 'address', address);
    addKeyValue(formData, 'numberChild', numberChild);
    addKeyValue(formData, 'disadvantagedContent', disadvantagedContent);
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];    
    $.ajax({
        url: baseUrl + '/chinh-sua-hoan-canh-kho-khan/' + idHC,
        type: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        data: JSON.stringify(formData),
        success: function (result) {
            bootbox.alert({
                message: "Cập nhật Hoàn cảnh khó khăn thành công!",
                className: 'bb-alternate-modal',
                callback: function () {
                    location.reload();
                }
            });

        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "Không thể  cập nhật.Vui lòng kiểm tra lại!",
                    className: 'bb-alternate-modal'
                });
            };
        }
    });
}

function delHC(data) {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/quan-ly-hoan-canh-kho-khan"
    $.ajax({
        url: baseUrl + '/xoa-hoan-canh-kho-khan/' + data,
        type: 'DELETE',
        success: function (result) {
            bootbox.alert({
                message: "Xóa Hồ sơ thành công",
                className: 'bb-alternate-modal',
                callback : () => {
                    window.location.replace(api_url)
                }
            });

        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "'Không thể xóa hồ sơ!",
                    className: 'bb-alternate-modal'
                });
            };
        }
    });
}


//---------------Bài đăng ----------------------
function addPost() {
    var title      = document.getElementsByName('title')[0].value      
    var keyWord   = document.getElementsByName('keyword')[0].value
    var shortScrifts = document.getElementsByName('shot')[0].value
    var content = myEditor.getData();
    var formData = {};
    
    addKeyValue(formData, 'title', title);
    addKeyValue(formData, 'keyWord', keyWord);
    addKeyValue(formData, 'shortScrifts', shortScrifts);
    addKeyValue(formData, 'content', content);
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/quan-ly-bai-dang"
    
    $.ajax({
        url: baseUrl + '/them-bai-dang',
        type: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        data: JSON.stringify(formData),
        success: function (result) {
            bootbox.alert({
                message: "Thêm Bài đăng thành công!",
                className: 'bb-alternate-modal',
                callback: function () {
                    window.location.replace(api_url);
                }
            });

        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "Không thể thêm.Vui lòng kiểm tra lại!",
                    className: 'bb-alternate-modal'
                });
            };
        }
    });
}

function delBD(data) {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/quan-ly-bai-dang"
    $.ajax({
        url: baseUrl + '/xoa-bai-dang/' + data,
        type: 'DELETE',
        success: function (result) {
            bootbox.alert({
                message: "Xóa Bài đăng thành công",
                className: 'bb-alternate-modal',
                callback : () => {
                    window.location.replace(api_url)
                }
            });

        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "'Không thể xóa Bài đăng!",
                    className: 'bb-alternate-modal'
                });
            };
        }
    });
}

function editBD() {

    var idBD = document.getElementById("idBD").name;

    var title      = document.getElementsByName('title')[0].value      
    var keyWord   = document.getElementsByName('keyword')[0].value
    var shortScrifts = document.getElementsByName('shot')[0].value
    var content = myEditor.getData();
    var formData = {};
    
    addKeyValue(formData, 'title', title);
    addKeyValue(formData, 'keyWord', keyWord);
    addKeyValue(formData, 'shortScrifts', shortScrifts);
    addKeyValue(formData, 'content', content);
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
      
    $.ajax({
        url: baseUrl + '/chinh-sua-bai-dang/' + idBD,
        type: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        data: JSON.stringify(formData),
        success: function (result) {
            bootbox.alert({
                message: "Cập nhật bài đăng thành công!",
                className: 'bb-alternate-modal',
                callback: function () {
                    location.reload();
                }
            });

        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "Không thể  cập nhật.Vui lòng kiểm tra lại!",
                    className: 'bb-alternate-modal'
                });
            };
        }
    });
}


$(document).ready(() => {

    // Chặn không cho submit khi nhấn enter
    $(document).on("keypress", "form", function (event) {
        return event.keyCode != 13;
    });
    $(document).on("click", "#logout", (event) => {
        window.location.replace("/logout");
    })
    // Change Pass
    // Tải lại khi close modal
    $('#changePassAccount').on('hidden.bs.modal', function (e) {
        e.preventDefault()
        location.reload();
    });

    /* must apply only after HTML has loaded */
    $("#updateForm").on("submit", function (e) {

        $(".error").hide();
        var hasError = false;
        var currentpass = $("#current_pass").val();
        var newpass = $("#new_pass").val();
        var cnfpass = $("#confirm_pass").val();

        if (currentpass == '') {
            $("#current_pass").after('<span class="error text-danger"><em>Vui lòng nhập mật khẩu hiện tại.</em></span>');
            hasError = true;
        } else if (newpass == '') {
            $("#new_pass").after('<span class="error text-danger"><em>Vui lòng nhập mật khẩu mới.</em></span>');
            hasError = true;
        } else if (cnfpass == '') {
            $("#confirm_pass").after('<span class="error text-danger"><em>Vui lòng xác nhận lại mật khẩu mới.</em></span>');
            hasError = true;
        } else if (newpass != cnfpass) {
            $("#confirm_pass").after('<span class="error text-danger"><em>Mật khẩu không khớp.</em></span>');
            hasError = true;
        }

        if (hasError == true) {
            return false;
        }
        if (hasError == false) {

            var postData = $(this).serializeArray();
            var formURL = $(this).attr("action");
            $.ajax({
                url: formURL,
                type: "POST",
                data: postData,
                success: function (data, textStatus, jqXHR) {
                    $('#changePassAccount .modal-header .modal-title').html("SUCCESS");
                    $('#changePassAccount .modal-body').html(data);
                    $("#submitForm").remove();
                    window.location.replace("/logout")
                },
                error: function (jqXHR, status, error) {
                    $('#changePassAccount .modal-header .modal-title').html(status);
                    $('#changePassAccount .modal-body').html("Nhập sai mật khẩu");
                    $("#submitForm").remove()
                    console.log(status + ": " + error);
                }
            });
            e.preventDefault();
        }
    });
})





//-------------Nhà Tài Trợ-----------------
function addSponsor() {
    console.log("rinSponsor");
    var nameSponsor = document.getElementById("addSponsorName").value
    var numberBankAccount = document.getElementById("addSponsorNumberBankAccount").value
    var nameBank = document.getElementById("addSponsorNamaeBank").value
    
    var checkNumber = /^[0-9]\d*(?:\.\d+)?(?:[kmbt])?$/;

    if (!checkNumber.test(numberBankAccount)) {
        bootbox.alert({
            message: "Hãy nhập số tài khoản ngân hàng hợp lệ.",
            className: 'bb-alternate-modal'
        })
        numberBankAccount.focus;
        return false;
    }
    var formData = {};
    addKeyValue(formData, 'nameSponsor', nameSponsor);
    addKeyValue(formData, 'numberBankAccount', numberBankAccount);
    addKeyValue(formData, 'nameBank', nameBank);
    console.log(formData);

    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/quan-ly-nha-tai-tro"

    $.ajax({
        url: baseUrl + '/sponsor',
        type: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        data: JSON.stringify(formData),
        success: function (result) {
            bootbox.alert({
                message: "Thêm nhà tài trợ thành công!",
                className: 'bb-alternate-modal',
                callback : () => {
                    window.location.replace(api_url);
                }
            });
            

        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "Không thể thêm!",
                    className: 'bb-alternate-modal'
                });
            };
        }
    });

}

async function callListHC() {
    let rs;
    let getUrl = window.location;
    let baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    console.log(baseUrl + '/hoan-canh-kho-khan/find-list');
    await $.ajax({
        url: baseUrl + '/hoan-canh-kho-khan/find-list',
        type: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
        success: function (result) {
            rs = result
        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "Không thể thêm!",
                    className: 'bb-alternate-modal'
                });
            };
        }
    });
    return rs;
}

function addMoney(sponsor){
    callListHC().then(list => {
        setViewOptionHC(list,sponsor);
    }).catch(err => {
        console.log(err);
    })
}

function setViewOptionHC(list,sponsor) {
    let viewHtml  = '';
    list.map(item => {
        viewHtml += `<option value="${item._id}">${item.name}: ${item.address}</option>`;
    })
    $("#listHoanCanh"+sponsor).html(viewHtml);
    $("#listHoanCanh"+sponsor).addClass('col-lg-12').selectpicker('setStyle');
    $('#listHoanCanh'+sponsor).selectpicker('refresh');
    
}

function adMoney(data) {
    var idSponsor = data;
    var numberMoney = document.getElementById('money'+ data).value
    var idDocument = document.getElementById("listHoanCanh" + data).value
    var checkNumber = /^[0-9]\d*(?:\.\d+)?(?:[kmbt])?$/;
    if (!checkNumber.test(numberMoney)) {
        bootbox.alert({
            message: "Số tiền phải ở dạng số.\nVui lòng nhập lại",
            className: 'bb-alternate-modal'
        })
        numberMoney.focus;
        return false;
    }
    var formData ={};
    addKeyValue(formData, 'idSponsor', idSponsor);
    addKeyValue(formData, 'numberMoney', numberMoney);
    addKeyValue(formData, 'idDocument', idDocument);

    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/quan-ly-nha-tai-tro"

    // bootbox.alert({
    //     message: "Bạn có chắc chắn muốn ủng hộ " + formData['numberMoney'] + " Vnđ",
    //     className: 'bb-alternate-modal',
    //     callback : () => {
    //         window.location.replace(api_url)
    //     }
    // });
    bootbox.confirm({
        message: "Bạn có chắc muốn ủng hộ " + formData['numberMoney'] + " Vnđ?",
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if(result) {
                $.ajax({
                    url: baseUrl + '/addmoney',
                    type: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    data: JSON.stringify(formData),
                    success: function (result) {
                        bootbox.alert({
                            message: "Nhà tài trợ tài trợ hoàn cảnh thành công!",
                            className: 'bb-alternate-modal',
                            callback : () => {
                                window.location.replace(api_url)
                            }
                        });
                        
            
            
                    }, error: function (jqXHR) {
                        console.log(jqXHR);
                        console.log(jqXHR.responseText);
                        if (500 == jqXHR.status) {
                            bootbox.alert({
                                message: "'Không thể cập nhật.Hãy xem lại!",
                                className: 'bb-alternate-modal '
                            });
                        };
                    }
                });
            }
        }
    });


}


var updateSponsor = null;
function editSponsor(data) {
    updateSponsor = data
}

function UpdateSponsor(data) {

    var nameSponsor = document.getElementById("update" + updateSponsor + "nameSponsor").value
    var numberBankAccount = document.getElementById("update" + updateSponsor + "NumberBankAccount").value
    var nameBank = document.getElementById("update" + updateSponsor + "nameBank").value
    
    var checkNumber = /^[0-9]\d*(?:\.\d+)?(?:[kmbt])?$/;
    var formData = {};
    
    if (numberBankAccount) {
        if (!checkNumber.test(numberBankAccount)) {
            bootbox.alert({
                message: "Hãy nhập số tài khoản ngân hàng hợp lệ.",
                className: 'bb-alternate-modal'
            })
            numberBankAccount.focus;
            return false;
        }
    }
    if (nameSponsor)
        addKeyValue(formData, 'nameSponsor', nameSponsor);
    if (numberBankAccount)
        addKeyValue(formData, 'numberBankAccount', numberBankAccount);
    if (nameBank)
        addKeyValue(formData, 'nameBank', nameBank);
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/quan-ly-nha-tai-tro"

    $.ajax({
        url: baseUrl + '/sponsor/' + data,
        type: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        data: JSON.stringify(formData),
        success: function (result) {
            bootbox.alert({
                message: "Cập nhật nhà tài trợ thành công!",
                className: 'bb-alternate-modal',
                callback : () => {
                    window.location.replace(api_url)
                }
            });
            


        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "'Không thể cập nhật.Hãy xem lại!",
                    className: 'bb-alternate-modal '
                });
            };
        }
    });
}

function deleteSponsor(data) {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var api_url = baseUrl + "/quan-ly-nha-tai-tro"
    $.ajax({
        url: baseUrl + '/sponsor/' + data,
        type: 'DELETE',
        success: function (result) {
            bootbox.alert({
                message: "Xóa nhà tai trợ thành công",
                className: 'bb-alternate-modal',
                callback : () => {
                    window.location.replace(api_url)
                }
            });

        }, error: function (jqXHR) {
            console.log(jqXHR);
            console.log(jqXHR.responseText);
            if (500 == jqXHR.status) {
                bootbox.alert({
                    message: "'Không thể xóa nhà tai trợ!",
                    className: 'bb-alternate-modal'
                });
            };
        }
    });
}