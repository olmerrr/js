var patternMask = IMask(document.getElementById('form-name'), {
  mask: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
});

// or without UI element
// var masked = IMask.PatternMasked({
//   mask: '{#}000[aaa]/NIC-`*[**]'
// });

const userPhone = document.getElementById('form-phone');
const maskPhoneOptions = {
  mask: '+{7}(000)000-00 00'
};
const maskPhone = IMask(userPhone, maskPhoneOptions);

const userAge = document.getElementById('form-age');
const maskAgeOptions = {
  mask: Number,
  min: 18,
  max: 60
};
const maskAge = IMask(userAge, maskAgeOptions);

// date-birth
var momentFormat = 'YYYY/MM/DD';
var momentMask = IMask(document.getElementById('form-date-birth'), {
  mask: Date,
  pattern: momentFormat,
  lazy: false,
  min: new Date(1970, 0, 1),
  max: new Date(2030, 0, 1),

  format: function (date) {
    return moment(date).format(momentFormat);
  },
  parse: function (str) {
    return moment(str, momentFormat);
  },

  blocks: {
    YYYY: {
      mask: IMask.MaskedRange,
      from: 1970,
      to: 2030
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },
    DD: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31
    },
    HH: {
      mask: IMask.MaskedRange,
      from: 0,
      to: 23
    },
    mm: {
      mask: IMask.MaskedRange,
      from: 0,
      to: 59
    }
  }
});