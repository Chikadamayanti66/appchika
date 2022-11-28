function hapusMenu(url) {
    Swal.fire({
        title: 'Are You Sure?',
        text: "Yakin ingin hapus menu?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}
function hapusRole(url) {
    Swal.fire({
        title: 'Are You Sure?',
        text: "Yakin ingin hapus menu?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}
function hapusSabmenu(url) {
    Swal.fire({
        title: 'Are You Sure?',
        text: "Yakin ingin hapus menu?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}