var namaSiswa = prompt('Masukkan nama siswa yang dikelas! \n ( cth : ziya, danil, mubarok)');

switch (namaSiswa) {
    case 'ziya':
        alert('Anak programmer jago web development')
        break;
    case 'danil':
        alert('Anak programmer jago web design')
        break;
    case 'mubarok':
        alert('Anak programmer jago UI/UX')
        break;
    default:
        alert('SIAPA YANG KAMU MASUKKAN?? SAYA TIDAK KENAL SAMA DIA')
        break;
}