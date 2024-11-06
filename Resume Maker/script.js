// handle the pictur

  const imageInput = document.getElementById('image-input');
  const profileImg = document.getElementById('profile-img');

  imageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      profileImg.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });

  function Printed(){
    print();
  }