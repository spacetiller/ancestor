var express     =   require('express')
var bodyParser  =   require('body-parser')
var app         =   express()
var ethereumjs  =   require("ethereumjs-wallet")

// post 
app.use(bodyParser.urlencoded({ extended: false }))
var multipart   =   require('connect-multiparty')
var multipartM  =   multipart()

// web3 
var Web3        =   require("web3");
var web3        =   new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545')) 



