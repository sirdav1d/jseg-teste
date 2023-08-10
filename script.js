let count = 1;

document.getElementById('radio1').checked = true;

setInterval(function () {
	nextImage();
}, 3000);

function nextImage() {
	count++;
	if (count > 4) {
		count = 1;
	}

	document.getElementById('radio' + count).checked = true;
}

let lgpdHtml = `
<div id='LGPD' class="bannerLGPD">
	<p>
			Nós utilizamos cookies para melhorar sua experiência como usuário.
					Para conferir detalhadamente nossas boas práticas, clique em
					<a
						href="/public/Política Privacidade - JSEG.pdf"
						target="_blank"
						rel="noopener noreferrer"
						>Políticas de Privadicade</a
					>
					e
					<a
						href="/public/Termos de uso - JSEG.pdf"
						target="_blank"
						rel="noopener noreferrer"
						>Termos de Uso.</a
					>
				</p>
				<div class="btnLGPD">
					<button id="accept" class="aceitoLGPD">Aceitar</button>
					<button id="reject"><u>Recusar</u></button>
				</div>
			</div>`;

let isAceppt = localStorage.getItem('lgpd');
if (!isAceppt) {
	document.body.innerHTML += lgpdHtml;
}

const btnAccept = document.querySelector('#accept');
const btnReject = document.querySelector('#reject');
const lgpdBanner = document.querySelector('#LGPD');

btnAccept.addEventListener('click', () => {
	localStorage.setItem('lgpd', 'accept');
	lgpdBanner.remove();
});

btnReject.addEventListener('click', () => {
	localStorage.clear();
	window.alert(
		'Para uma melhor experiência em nosso site, recomendamos que aceite os termos de uso e políticas de privacidade',
	);
});
