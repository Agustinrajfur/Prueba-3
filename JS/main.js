const BotonMonet = document.getElementById ("BotonMonet")
const BotonManet = document.getElementById ("BotonManet")
const BotonVincent = document.getElementById ("BotonVincent")
const BotonDegas = document.getElementById ("BotonDegas")
const BotonRenoire = document.getElementById ("BotonRenoire")
const Artistas = document.getElementById ("Artistas")
const MenuArtistas = document.getElementById ("MenuArtistas")


 

BotonMonet.addEventListener ("mouseover", event => {
    MenuArtistas.style.backgroundImage = "url('../Fotos/Sol\ naciente.jpg')";
    MenuArtistas.style.backgroundAttachment = "fixed";
    MenuArtistas.style.backgroundSize = "cover";
    MenuArtistas.style.backgroundRepeat = "no-repeat";
    MenuArtistas.style.backgroundPosition = "center";
    MenuArtistas.style.opacity = "10"
} )

BotonMonet.addEventListener ("mouseover", event => {
    Artistas.style.backgroundImage = "url('../Fotos/Retratomonet.png')";
    Artistas.style.backgroundAttachment = "fixed";
    Artistas.style.backgroundSize = "24%";
    Artistas.style.backgroundRepeat = "no-repeat";
    Artistas.style.backgroundPosition = "top 4rem center";
} )

BotonManet.addEventListener ("mouseover", event => {
    MenuArtistas.style.backgroundImage = "url('../Fotos/Almuerzo.jpg')";
    MenuArtistas.style.backgroundAttachment = "fixed";
    MenuArtistas.style.backgroundSize = "cover";
    MenuArtistas.style.backgroundRepeat = "no-repeat";
    MenuArtistas.style.backgroundPosition = "center";
    MenuArtistas.style.opacity = "10"
} )

BotonManet.addEventListener ("mouseover", event => {
    Artistas.style.backgroundImage = "url('../Fotos/Retratomanet.jpg')";
    Artistas.style.backgroundAttachment = "fixed";
    Artistas.style.backgroundSize = "contain";
    Artistas.style.backgroundSize = "33%";
} )

BotonVincent.addEventListener ("mouseover", event => {
    MenuArtistas.style.backgroundImage = "url('../Fotos/Starry_Night_Over_the_Rhone.jpg')";
    MenuArtistas.style.backgroundAttachment = "fixed";
    MenuArtistas.style.backgroundSize = "cover";
    MenuArtistas.style.backgroundRepeat = "no-repeat";
    MenuArtistas.style.backgroundPosition = "center";
    MenuArtistas.style.opacity = "10"
} )

BotonVincent.addEventListener ("mouseover", event => {
    Artistas.style.backgroundImage = "url('../Fotos/RetratoVincent.jpg')";
    Artistas.style.backgroundAttachment = "fixed";
    Artistas.style.backgroundSize = "contain";
} )

BotonDegas.addEventListener ("mouseover", event => {
    MenuArtistas.style.backgroundImage = "url('../Fotos/clase.jpg')";
    MenuArtistas.style.backgroundAttachment = "fixed";
    MenuArtistas.style.backgroundSize = "cover";
    MenuArtistas.style.backgroundRepeat = "no-repeat";
    MenuArtistas.style.backgroundPosition = "center";
    MenuArtistas.style.opacity = "10"
} )

BotonDegas.addEventListener ("mouseover", event => {
    Artistas.style.backgroundImage = "url('../Fotos/Retratodegas.jpg')";
    Artistas.style.backgroundAttachment = "fixed";
    Artistas.style.backgroundSize = "contain";
    Artistas.style.backgroundSize = "26%";
    Artistas.style.backgroundRepeat = "no-repeat";
    Artistas.style.backgroundPosition = "center";
} )

BotonRenoire.addEventListener ("mouseover", event => {
    MenuArtistas.style.backgroundImage = "url('../Fotos/Luncheon.jpg')";
    MenuArtistas.style.backgroundAttachment = "fixed";
    MenuArtistas.style.backgroundSize = "cover";
    MenuArtistas.style.backgroundRepeat = "no-repeat";
    MenuArtistas.style.backgroundPosition = "center";
    MenuArtistas.style.opacity = "10"
} )

BotonRenoire.addEventListener ("mouseover", event => {
    Artistas.style.backgroundImage = "url('../Fotos/RetratoRenoire.jpg')";
    Artistas.style.backgroundAttachment = "fixed";
    Artistas.style.backgroundSize = "contain";
} )

