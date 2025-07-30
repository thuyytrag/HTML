document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#addEmployeeModal form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const khachHang = form.querySelector("input[type='text']").value.trim();
    const nhanVien = form.querySelectorAll("input[type='text']")[1].value.trim();
    const soTien = form.querySelector("input[type='number']").value.trim();

    if (!khachHang || !nhanVien || !soTien) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (khachHang.length > 30) {
      alert("Tên khách hàng không được vượt quá 30 ký tự.");
      return;
    }

    if (nhanVien.length > 30) {
      alert("Tên nhân viên không được vượt quá 30 ký tự.");
      return;
    }

    alert("Giao dịch đã được thêm thành công!");
    form.reset();
    $('#addEmployeeModal').modal('hide');
  });
});
