const clientsData = {
  kultura: {
    title: "Ośrodki kultury",
    info: [
      "Gotowy program i materiały, potrzebuję jedynie stolików",
      "Dzieci w wieku 8-12 lat",
      "Małe grupy: 9-12 osób",
      "Czas trwania pojedynczego warsztatu 1,5h-2h",
      "Pojedyncze zajęcia lub cykl 3 warsztatów",
      "KONTAKT: kontakt@itkids.pl"
    ]
  },
  rodzice: {
    title: "Rodzice",
    info: [
      "Dzień warsztatowy lub impreza urodzinowa",
      "Tematyka dostosowana do wieku uczestników",
      "Czas trwania min 1,5h",
      "KONTAKT: kontakt@itkids.pl"
    ]
  },
  firmy: {
    title: "Firmy",
    info: [
      "Dzień warsztatowy dla dzieci pracowników",
      "Tematyka dostosowana do wieku uczestników",
      "Czas trwania min 1,5h",
      "Pojedyncze zajęcia lub cykl 4 warsztatów",
      "KONTAKT: kontakt@itkids.pl"
    ]
  },
  szkoly: {
    title: "Szkoły",
    info: [
      "Klasy 1-3",
      "Dzieci w wieku 8-12 lat",
      "Tematyka dostosowana do wieku oraz liczby uczestników",
      "Czas trwania pojedynczego warsztatu 1,5h",
      "Pojedyncze zajęcia lub cykl 3 warsztatów",
      "KONTAKT: kontakt@itkids.pl"
    ]
  }
};

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalList = document.getElementById('modalList');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.client-hexagon').forEach(hex => {
  hex.addEventListener('click', () => {
    const key = hex.dataset.modal;
    const data = clientsData[key];

    modalTitle.textContent = data.title;
    modalList.innerHTML = '';

    data.info.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalList.appendChild(li);
    });

    modalOverlay.style.display = 'flex';
  });
});

modalOverlay.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

modalClose.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

document.getElementById('scrollToWorkshops').addEventListener('click', () => {
  document.getElementById('workshops').scrollIntoView({ behavior: 'smooth' });
});
