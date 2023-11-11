import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(
//     `
// <div class="form-wrapper">
// <form class="register-form">
//   <input type="text" name="name" />
//   <input type="email" name="email" />
//   <input type="password" name="password" />
//   <button class="sign-up-btn">Sign Up</button>
// </form>
// </div>
// `
document.querySelector('#register')
)

// instance.show()
// instance.close()

export function onOpenModal (e){
instance.show()
}

function registerUser (){

}