const Jet = require('../models/jet')

function index(req, res) {
	Jet.find()
		.then((foundJets) => res.status(200).json(foundJets))
		.catch((err) => console.log(err))
}

function create(req, res) {
	req.body.user = req.currentUser
	Jet.create(req.body)
		.then((createdJet) => res.status(201).json(createdJet))
		.catch((err) => console.log(err))
}

function show(req, res) {
	Jet.findById(req.params.id)
		.then((jet) => res.status(202).json(jet))
		.catch((err) => console.log(err))
}

function deleteJet(req, res) {
	Jet.findByIdAndDelete(req.params.id)
		.then(() => res.sendStatus(204))
		.catch((err) => console.log(err))
}

function edit(req, res) {
	Jet.findById(req.params.id)
		.then((jet) => {
			if (!jet) return res.status(404).json({ message: 'Not Found' })
			Object.assign(jet, req.body)
			return jet.save()
		})
		.then((editedJet) => res.status(202).json(editedJet))
		.catch((err) => res.json(err))
}

function commentCreate(req, res, next) {
	req.body.user = req.currentUser
	Jet.findById(req.params.id)
		.then((jet) => {
			if (!jet) return res.status(404).json({ message: 'Not Found' })
			jet.comments.push(req.body)
			return jet.save()
		})
		.then((jet) => res.status(201).json(jet))
		.catch(next)
}

function commentDelete(req, res) {
	Jet.findById(req.params.id)
		.then((jet) => {
			if (!jet) return res.status(404).json({ message: 'Not Found' })
			const comment = jet.comments.id(req.params.commentId)
			if (!comment) return res.status(404).json({ message: 'Not Found' })
			if (!comment.user.equals(req.currentUser._id))
				return res.status(401).json({ message: 'Unauthorized' })
			comment.remove()
			return jet.save()
		})
		.then((jet) => res.status(202).json(jet))
		.catch((err) => res.json(err))
}

module.exports = {
	index,
	create,
	show,
	deleteJet,
	edit,
	commentCreate,
	commentDelete,
}
