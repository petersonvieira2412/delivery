'use strict'

class SobreController {
  async index({ view }) {
    return view.render('sobre.index');
  }
}

module.exports = SobreController
