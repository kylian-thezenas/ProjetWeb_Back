const pokemonModel = require('../models/pokemonModel');

module.exports.allPokemons = (req, res) => {
    pokemonModel
        .find()
        .sort({ number: 1 })
        .then((docs) => {
            return res.status(200).send(docs);
        })
        .catch((err) => {
            return res.status(400).send("Erreur lors de la récupération des pokémons");
        });
}


module.exports.addPokemon = async (req, res) => {
    const newPokemon = new pokemonModel({
        number: req.body.number,
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        image: req.body.image,
    });
    try{
        const pokemon = await newPokemon.save();
        console.log(pokemon);
        return res.status(201).json(pokemon);

    }catch(err){
        return res.status(400).json({message: "Erreur lors de l'ajout du pokémon"});
    }
}

module.exports.getPokemon = async (req, res) => {
    const query = {number: req.params.number};
    try{
        const pokemon = await pokemonModel.find(query);
        return res.status(200).json(pokemon);
    }catch(err){
        return res.status(400).json({message: "Erreur lors de la récupération du pokémon"});
    }
}

module.exports.updatePokemon = async (req, res) => {
    const query = {number: req.params.number};
    try{
        const pokemon = await pokemonModel.findOneAndUpdate(query, req.body, {new: true});
        return res.status(200).json(pokemon);
    }catch(err){
        return res.status(400).json({message: "Erreur lors de la mise à jour du pokémon"});
    }
}

module.exports.deletePokemon = async (req, res) => {
    const query = {number: req.params.number};
    try{
        const pokemon = await pokemonModel.findOneAndDelete(query);
        return res.status(200).json(pokemon);
    }catch(err){
        return res.status(400).json({message: "Erreur lors de la suppression du pokémon"});
    }
}