module.exports = class PSA {
  constructor(View, Data) {
    this.Data = Data
    this.View = View
  }

  async get(req, res) {
    try {
      const users = await this.Data.find().lean()
      res.render(this.View, {users})
    } catch (error) {
      res.render(this.View, {error: error.message})
    }
  }

  async post(req, res) {
    try {
      const newData = new this.Data(req.body)
      await newData.save()
      res.redirect("/")
    } catch (error) {
      res.render(this.View, {error: error.message})
    }
  }

  async put(req, res) {
    try {
      await this.Data.findByIdAndUpdate(req.params.id, req.body)
      res.redirect("/")
    } catch (error) {
      res.render(this.View, {error: error.message})
    }
  }

  async delete(req, res) {
    try {
      await this.Data.findByIdAndDelete(req.params.id)
      res.redirect("/")
    } catch (error) {
      res.render(this.View, {error: error.message})
    }
  }
}
