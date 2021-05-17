import validate from 'validate.js';
import { AsYouType } from 'libphonenumber-js';
import { parsePhoneNumberFromString as parseMax } from 'libphonenumber-js/max'

(function(window, document, wp, undefined) {
    
    const Validators = function() {
        return {
        	contactForm: contactForm,
        };
    }; 
    
    const init = function(el, constraints) {

        const form = el;
        
        form.addEventListener("submit", function(ev) {
            ev.preventDefault();
            handleFormSubmit(form);
        });

        // Hook up the inputs to validate on the fly
        const inputs = form.querySelectorAll("[required]");

        for (let i = 0; i < inputs.length; ++i) {
            inputs.item(i).addEventListener("change", function(ev) {
                const errors = validate(form, constraints, { fullMessages: false }) || {};
                console.clear();
                console.log(errors);
                showErrorsForInput(this, errors[this.name])
            });
        }

        function handleFormSubmit(form, input) {
            // validate the form against the constraints
            const errors = validate(form, constraints, { fullMessages: false });
            console.log(errors);
            // then we update the form to reflect the results
            showErrors(form, errors || {});
            if (!errors) {
                showSuccess();
            } else {
                // console.log(errors);
            }
        };
        
        // Updates the inputs with the validation errors
        function showErrors(form, errors) {
            // We loop through all the inputs and show the errors for that input
            _.each(form.querySelectorAll("[required]"), function(input) {
            // Since the errors can be null if no errors were found we need to handle
            // that
            showErrorsForInput(input, errors && errors[input.name]);
            });
        };

        // Shows the errors for a specific input
        function showErrorsForInput(input, errors) {
            // This is the root of the input
            const formGroup = closestParent(input.parentNode, "form-group")
            // Find where the error messages will be insert into
            , messages = formGroup.querySelector(".js-messages");
            // First we remove any old messages and resets the classes
            resetFormGroup(formGroup);
            // If we have errors
            if (errors) {
                // we first mark the group has having errors
                formGroup.classList.add("has-error");
                // then we append all the errors
                _.each(errors, function(error) {
                    addError(messages, error);
                });
            } else {
                // otherwise we simply mark it as success
                formGroup.classList.add("has-success");
            }
        };

        // Recusively finds the closest parent that has the specified class
        function closestParent(child, className) {
            if (!child || child == document) {
                return null;
            }
            if (child.classList.contains(className)) {
                return child;
            } else {
                return closestParent(child.parentNode, className);
            }
        };
        
        function resetFormGroup(formGroup) {
            // Remove the success and error classes
            formGroup.classList.remove("has-error");
            formGroup.classList.remove("has-success");
            // and remove any old messages
            _.each(formGroup.querySelectorAll(".help-block.error"), function(el) {
                el.parentNode.removeChild(el);
            });
        }
        
        // Adds the specified error with the following markup
        // <p class="help-block error">[message]</p>
        function addError(messages, error) {
            const block = document.createElement("p");
            block.classList.add("help-block");
            block.classList.add("error");
            block.innerText = error;
            messages.appendChild(block);
        }

        function startAjax() {
            form.querySelector('button').style.display = 'none';
            form.querySelector('.lds-ripple').style.display = 'inline-flex';
            form.querySelector('.form-message').innerHTML = '';
            form.querySelector('.form-message').style.display = 'none';
        }

        function finishAjax() {
            form.querySelector('button').style.display = 'inline-flex';
            form.querySelector('.lds-ripple').style.display = 'none';
        }

        function submitForm() {
            let xmlhttp = new XMLHttpRequest(), 
                action = form.getAttribute('action');

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                    if (xmlhttp.status == 200) {
                        showMessage(xmlhttp.responseText);
                    } else {
                        showMessage('Wystąpił błąd w wysyłaniu formularza.');
                    }
                    finishAjax();
                }
            };

            xmlhttp.open("post", action, true);
            // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            let FD = new FormData(form);
            console.log(FD);
            xmlhttp.send(FD);
        }

        function showMessage(message) {
            let container = form.querySelector('.form-message');
            container.style.display = 'block';
            container.innerHTML = message;
        }
        
        function showSuccess() {
            startAjax();
            submitForm();
        }
        
        // Custom Validate for telephone
        validate.validators.telCheck = function(value, options, key, attributes) {
            
            if (value) {
                let phoneNumber = parseMax(value, 'PL');

                if (phoneNumber.isValid()) {
                    return;
                } else {
                    return 'Podaj poprawny numer';
                }
            }
        };
    };
    
    const telFormat = function() {
        let inputs = document.getElementsByTagName('input');

        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i].type.toLowerCase() == 'tel') {               
               inputs[i].addEventListener("keyup", event => {
                    let val_old = inputs[i].value,
                        val_new = new AsYouType('PL').input(inputs[i].value);
                    inputs[i].value = val_new;                    
                });
            }
        }
    }();
    
    
    // Init
    
    const contactForm = function() {
        
        const constraints = {
            email: {
                presence: { message: "Pole nie może być puste" },
                email: { message: 'E-mail nie jest poprawny' }
            },
            
            message: {
                presence: { message: "Pole nie może być puste" },
                length: {
                    minimum: 3,
                    message: 'Min. 3 znaki'
                }
            },

            name: {
                presence: { message: "Pole nie może być puste" },
                length: {
                    minimum: 3,
                    message: 'Min. 3 znaki'
                },
                format: {
                    pattern: "[a-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9 ,.'-]+",
                    flags: "i",
                    message: "Może zawierać tylko znaki a-z i 0-9"
                }
            }, 
            
            police: {
                presence: { message: "Zaakceptuj politykę prywatności" },
                inclusion: {
                    within: [true],
                    message: "^Zaakceptuj politykę prywatności"
                }
            },

            tel: {
                presence: { message: "Pole nie może być puste" },
                telCheck: "Podaj poprawny numer"
            },
        }; 
        
        init(document.getElementsByClassName("js-contactForm")[0], constraints);
    };
    
    wp.Validators = new Validators();

    document.getElementsByClassName('js-contactForm')[0] ? wp.Validators.contactForm() : false;


}(window, document, window.wp = window.wp  || {}));
