const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalList = document.getElementById('modalList');
const closeModal = document.getElementById('closeModal');

const clientsData = {
  przedszkolaki: {
    title: "Przedszkolaki (4-6 lat)",
    info: [
      "Czas trwania zajęć: 45 minut",
      "Max 8 dzieci",
      "Obecność rodzica",
      "Materiały w cenie",
      "Weekendowe zajęcia"
    ]
  },
  mlodsi: {
    title: "Młodsi uczniowie (7-9 lat)",
    info: [
      "60 minut",
      "10 dzieci",
      "Bez opiekuna",
      "Materiały w cenie"
    ]
  },
  starsi: {
    title: "Starsi uczniowie (10-12 lat)",
    info: [
      "90 minut",
      "Laptop mile widziany",
      "Projekty domowe"
    ]
  },
  nastolatkowie: {
    title: "Nastolatkowie (13-15 lat)",
    info: [
      "120 minut",
      "Własny laptop",
      "Certyfikat"
    ]
  }
};

document.querySelectorAll('.client-hexagon').forEach(el => {
  el.addEventListener('click', () => {
    const key = el.dataset.client;
    const data = clientsData[key];

    modalTitle.textContent = data.title;
    modalList.innerHTML = '';

    data.info.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalList.appendChild(li);
    });

    modal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.add('hidden');
});

document.getElementById('scrollToWorkshops')
  .addEventListener('click', () => {
    document.getElementById('workshops')
      .scrollIntoView({ behavior: 'smooth' });
  });
