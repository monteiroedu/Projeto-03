//import req from 'express/lib/request'
import { connection } from '../database/connection.js'
import { jogos } from '../model/jogos.js'
 
export const getIndex = async (req, res) => {
    try {
        const listJogos = await jogos.findAll()
        res.render('index.ejs', {
            listJogos
        })
    } catch(error) {
        res.send(error.message)
    }
   }

export const getDetalhes = async (req, res) => {
    try {
        const jogosDetalhes = await jogos.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            jogosDetalhes
        })
    }
    catch (error) {
        res.send(error.message)
    }
}

export const getDeletar = async (req, res) => {
    try {
        await jogos.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }
    catch (error) {
        res.send(error.message)
    }
}

export const getCriar = (req, res) => {
    res.render('criar.ejs')
}

export const postCriar = async (req, res) => {
    const { nome, ano, desenvolvido, plataforma, img, iframe } = req.body
    try {
        if(!nome || !ano || !desenvolvido || !plataforma || !img || !iframe) {
            res.send('Todos os campos são obrigatórios!')
        } else {
                 await jogos.create({nome, ano, desenvolvido, plataforma, img, iframe})
         res.redirect('/')
        }
    }
    catch(error){
        res.send(error.message)
    }
}

export const getEditar = async (req, res) => {
    try {
        const jogoAtual = await jogos.findByPk(req.params.id)
        res.render('editar.ejs', {
            jogoAtual
        })
    }
    catch(error){
        res.send(error.message)
    }
}

export const postEditar = async (req, res) => {
   try {
       const { nome, ano, desenvolvido, plataforma, img, iframe } = req.body
       await jogos.update({
           nome: nome,
           ano: ano,
           desenvolvido: desenvolvido,
           plataforma: plataforma,
           img: img,
           iframe: iframe
       }, {
           where: {
               id: req.params.id
           }
       }) 
   }
   catch (error) {
       res.send(error.message)
   }
}