const openBtn = document.getElementById('about-modalBtn');

// Grabbing modal element
const modal = document.getElementById('aboutMeModal');

// Grabbing close button
const close = document.getElementById('close');
const mainTitle = document.querySelector('.section8')


const openModal = () => {
    modal.style.display = 'block';
    
    
}

const blockText = () => {
	mainTitle.style.display = 'none';
	openModal();
};

const closeModal = () => {
    modal.style.display = 'none'
}



openBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal)