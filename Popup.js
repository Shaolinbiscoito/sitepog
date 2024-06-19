function openPopup() {

    var popupUrl = 'https://www.youtube.com/@nbabrasil';
    
    var popupWidth = 500;
    var popupHeight = 300;

    // Calcular a posição central para o pop-up
    var left = (window.innerWidth - popupWidth) / 2;
    var top = (window.innerHeight - popupHeight) / 2;

    // Abrir o pop-up
    var popupWindow = window.open(popupUrl, '_blank', 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + left + ',top=' + top);
    
    // Focar na janela do pop-up, se ela já estiver aberta
    if (window.focus) {
        popupWindow.focus();
    }
}
