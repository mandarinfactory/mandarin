{
    let video = document.querySelector('.gnb_sm video')
    let gnbSm = document.querySelector('.gnb_sm')
    let time = -1
    document.querySelector('.mbtn').addEventListener('click', () => {
        e.currentTarget.classList.toggle('active')
        gnbSm.classList.add('active')
        time = time * -1
    })

    let intervalID = setInterval(() => {
        video.currentTime = video.currentTime + time
        if (time === 0.1 && video.currentTime === 0) {
            gnbSm.classList.remove('active')
        }
    }, 100)
}