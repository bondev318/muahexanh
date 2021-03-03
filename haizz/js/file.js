$(document).ready(function () {
    var i = 1;
    $("#myBtn").on("click", function () {
        $("#myModal").modal();
    });
    var txtMa = $("#txtMa");
    var tbMa = $("#tbMa");
    function KiemtraMa() {
        var re = /^[0-9]{8}/;
        if (txtMa.val() == "") {
            tbMa.html("* bắt buộc nhập");
            return false;
        }
        if (!re.test(txtMa.val())) {
            tbMa.html("* Mã sinh viên phải gồm 8 chữ so");
            return false;
        }
        tbMa.html("*");
        return true;
    }
    txtMa.blur(KiemtraMa);


    var txtHT = $("#txtHT");
    var tbHT = $("#tbHT");
    function KiemtraHT() {
        var re = /^[A-Za-z]/;
        if (txtHT.val() == "") {
            tbHT.html("* bắt buộc nhập");
            return false;
        }
        if (!re.test(txtHT.val())) {
            tbHT.html("* Error:");
            return false;
        }
        tbHT.html("*");
        return true;
    }
    txtHT.blur(KiemtraHT);



    var txtNgay = $("#txtNgay");
    var tbNgay = $("#tbNgay");
    function KiemtraNgayDK() {
        if (txtNgay.val() == "") {
            txtNgay.html("* bắt buộc nhập");
            return false;
        }
        var day = new Date(txtNgay.val());
        var today = new Date();
        today.setDate(today.getDate());
        if (day > today) {
            tbNgay.html("* Ngày đăng ký không được quá ngày hiện tại");
            return false;
        }
        tbNgay.html("*");
        return true;
    }
    txtNgay.blur(KiemtraNgayDK);


    var txtEmail = $("#txtEmail");
    var tbEmail = $("#tbEmail");
    function KiemtraEmail() {
        var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (txtEmail.val() == "") {
            tbEmail.html("*bắt buộc nhập");
            return false;
        }
        if (!re.test(txtEmail.val())) {
            tbEmail.html("* Error:Email không hợp lệ");
            return false;
        }
        tbEmail.html("*");
        return true;
    }
    txtEmail.blur(KiemtraEmail);


    var txtSDT = $("#txtSDT");
    var tbSDT = $("#tbSDT");
    function KiemtraSDT() {
        var re = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (txtSDT.val() == "") {
            tbSDT.html("*bắt buộc nhập");
            return false;
        }
        if (!re.test(txtSDT.val())) {
            tbSDT.html("* Error:SĐT không hợp lệ");
            return false;
        }
        tbSDT.html("*");
        return true;
    }
    txtSDT.blur(KiemtraSDT);
   

    $("#btnSave").click(function () {
        if (!KiemtraMa() || !KiemtraHT() || !KiemtraNgayDK() || !KiemtraEmail() || !KiemtraSDT()) {
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }
        var ma = txtMa.val();
        var hoten = txtHT.val();
        var ngaydk = txtNgay.val();
        var email = $("#txtEmail").val();
        var sdt = $("#txtSDT").val();
        var them = "<tr><td>" + ma + "</td><td>" + hoten + "</td><td>" + ngaydk + "</td><td>"
            + email + "</td><td>" + sdt + "</td></tr>";
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true;
    });
});