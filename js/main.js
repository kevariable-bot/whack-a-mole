export default class WhackAMole {
  constructor(land, times, mouses, score, audio) {
    this.land = land;
    this._times = times;
    this.elBefore;
    this.break = false;
    this.mouses = mouses;
    this.score = score;
    this.result = 0;
    this.audio = audio;
  }

  mouseVisible() {
    const mouse = this.landRand();

    mouse.classList.add('visible');

    setTimeout(() => {
      mouse.classList.remove('visible');

      if (!this.break) {
        this.mouseVisible();
      }
    }, this.setTime());
  }

  landRand() {
    const rand = Math.floor(Math.random() * this.land.length);
    const land = this.land[rand];

    if (land == this.elBefore) {
      this.landRand();
    }

    this.elBefore = land;

    return land;
  }

  setTime() {
    const { min, max } = this._times;

    return Math.round(Math.random() * (min - max) + max);
  }

  BreakTime() {
    this.break = true;
  }

  start() {
    this.mouseVisible();
    this.hold();
    this.result = 0;
    this.score.innerHTML = this.result;

    setTimeout(() => {
      this.break = true;
    }, 20000);
  }

  hold() {
    this.mouses.forEach(mouse => {
      mouse.addEventListener('click', e => {
        e.target.parentNode.classList.remove('visible');
        this.audio.play();
        this.result++;
        this.score.innerHTML = this.result;
      });
    });
  }
}
