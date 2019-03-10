var potrace = require('./potrace/index');


potrace.trace(ImagePixel, { threshold: 40 }, function(err, svg) {
  if (err) throw err;
  console.log(svg);
});