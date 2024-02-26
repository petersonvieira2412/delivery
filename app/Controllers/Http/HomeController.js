'use strict'

class HomeController {
  async index({ view, response }) {
    const url = response.route('home');
    return view.render('home.index', { title: 'Pizzaria Maluca' });
  }
}

module.exports = HomeController
