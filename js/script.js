  (function() {
    var link = document.querySelector('.modal-reply-button');
    var popup = document.querySelector('.modal-reply');
    var overlay = document.querySelector('.modal-reply-overlay');
    var close = popup.querySelector('.big-close');
    var form = popup.querySelector('form');
    var username = popup.querySelector('[name=username]');
    var email = popup.querySelector('[name=email]');
    var comment = popup.querySelector('[name=comment]');
    var storage_user = localStorage.getItem('username');
    var storage_email = localStorage.getItem('email');

    link.addEventListener('click', function(evt){
      evt.preventDefault();
      popup.classList.add('modal-reply-show');
      overlay.classList.add('modal-reply-overlay-show');

      if(storage_user && storage_email) {
        username.value = storage_user;
        email.value = storage_email;
        comment.focus();
        } else {
          username.focus();
        }
    });

    close.addEventListener('click', function(evt){
      evt.preventDefault();
      popup.classList.remove('modal-reply-show');
      popup.classList.remove('modal-reply-error');
      overlay.classList.remove('modal-reply-overlay-show');
    });

    form.addEventListener('submit', function(evt){
      if (!username.value || !email.value || !comment.value) {
          evt.preventDefault();
          popup.classList.remove('modal-reply-error');
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add('modal-reply-error');
      } else {
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
      }
    });

    window.addEventListener('keydown', function(evt) {
      if (evt.keyCode === 27) {
        if (popup.classList.contains('modal-reply-show')) {
            popup.classList.remove('modal-reply-show');
            popup.classList.remove('modal-reply-error');
            overlay.classList.remove('modal-reply-overlay-show');
          }
      }
    });

    overlay.addEventListener('click', function() {
     if (popup.classList.contains('modal-reply-show')) {
          popup.classList.remove('modal-reply-show');
          popup.classList.remove('modal-reply-error');
          overlay.classList.remove('modal-reply-overlay-show');
      }
    });
  }());
