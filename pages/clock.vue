<template>
  <div id="text-clock">
    <!-- line 1 -->
    <p id="line-1">{{randsplit(6)}}<span
        id="it"
        class="active"
      >IT</span>{{randsplit(1)}}<span
        id="is"
        class="active"
      >IS</span>{{randsplit(2)}}<span id="tgif">GTFI</span>
    </p>
    <!-- line 2 -->
    <p id="line-2">{{randsplit(3)}}<span
        id="quarter"
        class="desc"
      >QUARTER</span>{{randsplit(5)}}</p>
    <!-- line 3 -->
    <p>{{randsplit(3)}}<span
        id="twenty"
        class="desc"
      >TWENTY</span><span
        id="five"
        class="desc"
      >FIVE</span>{{randsplit(3)}}
    </p>
    <!-- line 4 -->
    <p>
      {{randsplit(3)}}<span
        id="half"
        class="desc"
      >HALF</span>{{randsplit(2)}}<span
        id="ten"
        class="desc"
      >TEN</span>{{randsplit(2)}}<span
        id="to"
        class="desc"
      >TO</span>
    </p>
    <!-- line 5 -->
    <p>
      {{randsplit(4)}}<span
        id="past"
        class="desc"
      >PAST</span>{{randsplit(3)}}<span
        id="nine"
        class="hr"
      >NINE</span>
    </p>
    <!-- line 6 -->
    <p>
      {{randsplit(1)}}<span
        id="one"
        class="hr"
      >ONE</span>{{randsplit(3)}}<span
        id="six"
        class="hr"
      >SIX</span>{{randsplit(3)}}<span
        id="three"
        class="hr"
      >THREE</span>
    </p>
    <!-- line 7 -->
    <p id="line-7">
      {{randsplit(3)}}<span
        id="four"
        class="hr"
      >FOUR</span><span
        id="five-hr"
        class="hr"
      >FIVE</span>{{randsplit(3)}}<span
        id="two"
        class="hr"
      >TWO</span>
    </p>
    <!-- line 8 -->
    <p id="line-8">
      {{randsplit(3)}}<span
        id="eight"
        class="hr"
      >EIGHT</span>{{randsplit(3)}}<span
        id="eleven"
        class="hr"
      >ELEVEN</span>
    </p>
    <!-- line 9 -->
    <p id="line-9">{{randsplit(3)}}<span
        id="seven"
        class="hr"
      >SEVEN</span>{{randsplit(3)}}<span
        id="twelve"
        class="hr"
      >TWELVE</span>
    </p>
    <!-- line 10 -->
    <p id="line-10">
      <span
        id="ten-hr"
        class="hr"
      >TEN</span>{{randsplit(3)}}<span
        id="oclock"
        class="desc"
      >OCLOCK</span>{{randsplit(3)}}
    </p>
    <!-- line 11 -->
    <p id="line-11"><span
        id="midnight"
        class="hr"
      >MIDNIGHT</span></p>
    <p id='sec'>{{secFillL}}<span class="active desc sec">{{wordSec}}</span>{{secFillR}}</p>

  </div>
</template>

<script>
const cryptoRandomString = require('crypto-random-string')

var converter = require('number-to-words')
var moment = require('moment')
export default {
  layout: 'clockLayout',
  name: 'App',
  mounted() {
    var self = this
    setInterval(() => {
      self.mTime()
    }, 1000)
    setInterval(function() {
      self.textClock()
    }, 10000)
    this.textClock()
  },
  data() {
    return {
      time: '',
      sec: '',
      wordSec: '',
      rand: ''
    }
  },
  computed: {
    secLen() {
      return this.wordSec.length
    },
    secFillL() {
      var filler = cryptoRandomString(6)
      var len = this.secLen
      var space = 11 - len
      var div = Math.floor(space / 2)
      var fillL = filler.substr(0, div)
      return fillL
    },
    secFillR() {
      var filler = cryptoRandomString(6)
      var len = this.secLen
      var space = 11 - len
      var div = Math.ceil(space / 2)
      var fillR = filler.substr(0, div)
      return fillR
    },
    seconds() {
      const arr = []
      let i
      for (i = 0; i < 60; i++) {
        var newI = converter.toWords(i)
        arr.push(newI)
      }
      return arr
    }
  },
  components: {},
  methods: {
    mTime() {
      this.time = new moment().format()
      this.sec = new moment().format('ss')
      this.wordSec = converter.toWords(this.sec)
      this.rand = cryptoRandomString(100)
    },
    randsplit(n) {
      var r = cryptoRandomString(n)
      return r
    },
    blur() {
      var hr = document.getElementById('is')
      if (hr.classList.contains('on')) {
        hr.classList.remove('on')
        hr.classList.remove('secblur')

        console.log('on')
      } else {
        hr.classList.add('on')
        hr.classList.add('secblur')
      }
    },
    bluroff() {
      var hr = document.getElementById('is')
      hr.classList.remove('secblur')
    },
    textClock() {
      var newDate = new Date(),
        day = newDate.getDay(),
        hours = newDate.getHours(),
        minutes = newDate.getMinutes().toString(),
        seconds = newDate.getSeconds().toString()

      if (hours > 12 && hours !== 0 && hours !== 23) {
        hours = hours - 12
      }
      if (minutes < 10) {
        minutes = 0 + minutes
      }
      if (seconds < 10) {
        seconds = 0 + seconds
      }

      var minsSecs = minutes + seconds
      if (minsSecs > 3230) {
        hours++
      }

      if (day === 5) {
        var tg = document.getElementById('tgif')
        tg.innerHTML = 'TGIF'
      }

      var hoursObj = {
        1: '#one',
        2: '#two',
        3: '#three',
        4: '#four',
        5: '#five-hr',
        6: '#six',
        7: '#seven',
        8: '#eight',
        9: '#nine',
        10: '#ten-hr',
        11: '#eleven',
        12: '#twelve',
        23: '#eleven',
        24: '#midnight',
        0: '#midnight'
      }
      this.updateHour(hoursObj[hours])
      if (
        (minsSecs >= 5730 && minsSecs < 6000) ||
        (minsSecs >= 0 && minsSecs < 230)
      ) {
        if (hours !== 24 && hours !== 0) {
          this.updateDesc('#oclock')
        }
      } else if (minsSecs >= 230 && minsSecs < 730) {
        this.updateDesc('#five, #past')
      } else if (minsSecs >= 730 && minsSecs < 1230) {
        this.updateDesc('#ten, #past')
      } else if (minsSecs >= 1230 && minsSecs < 1730) {
        this.updateDesc('#quarter, #past')
      } else if (minsSecs >= 1730 && minsSecs < 2230) {
        this.updateDesc('#twenty, #past')
      } else if (minsSecs >= 2230 && minsSecs < 2730) {
        this.updateDesc('#twenty, #five, #past')
      } else if (minsSecs >= 2730 && minsSecs < 3230) {
        this.updateDesc('#half, #past')
      } else if (minsSecs >= 3230 && minsSecs < 3730) {
        this.updateDesc('#twenty, #five, #to')
      } else if (minsSecs >= 3730 && minsSecs < 4230) {
        this.updateDesc('#twenty, #to')
      } else if (minsSecs >= 4230 && minsSecs < 4730) {
        this.updateDesc('#quarter, #to')
      } else if (minsSecs >= 4730 && minsSecs < 5230) {
        this.updateDesc('#ten, #to')
      } else if (minsSecs >= 5230 && minsSecs < 5730) {
        this.updateDesc('#five, #to')
      } else {
        this.updateDesc()
      }
    },
    updateHour(classes) {
      var hra = document.querySelectorAll('hr')
      for (let item of hra) {
        item.remove('active')
      }
      var clab = document.querySelectorAll(classes)
      for (let item of clab) {
        item.classList.add('active')
      }
    },
    updateDesc(classes) {
      var hr = document.querySelectorAll('desc')
      for (let item of hr) {
        item.remove('active')
      }
      var cl = document.querySelectorAll(classes)
      for (let item of cl) {
        item.classList.add('active')
      }
    }
  }
}
</script>

<style scoped>
#cont {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#midnight {
  color: #000;
}

#it,
#is,
span.active {
  color: yellow !important;
  transition: color 0.4s ease-out;
  -ms-transition: color 0.4s ease-out;
  -moz-transition: color 0.4s ease-out;
  -webkit-transition: color 0.4s ease-out;
}
span.sec {
  color: orangered !important;
  transition: color 0.4s ease-out;
  -ms-transition: color 0.4s ease-out;
  -moz-transition: color 0.4s ease-out;
  -webkit-transition: color 0.4s ease-out;
}
#text-clock {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-transform: uppercase;
}
.hidden {
  display: none;
}
</style>
