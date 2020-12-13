const express=require('express')
const dotenv=require('dotenv') 
const chalk=require('chalk')
try
{
	dotenv.config()
	const app=new express()

	app.listen(process.env.EXPRESS_PORT||80,process.env.EXPRESS_HOSTNAME||null,process.env.BACKLOG||20,error=>
	{
		try
		{
			if(error)
				throw error
			console.log('[%s] %s',chalk.blue('INFO'),chalk.red('Server Running'))
			console.log('[%s] %s:\t%s',chalk.blue('INFO'),chalk.gray('Port'),chalk.yellow(process.env.EXPRESS_PORT||80))
			console.log('[%s] %s:\t%s',chalk.blue('INFO'),chalk.gray('Host'),chalk.yellow(process.env.EXPRESS_HOSTNAME||null))
			console.log('[%s] %s:\t%s',chalk.blue('INFO'),chalk.gray('Backlog'),chalk.yellow(process.env.BACKLOG||20))
			console.log('[%s] %s:\t%s',chalk.blue('INFO'),chalk.gray('URL'),chalk.blue(`http://${process.env.EXPRESS_HOSTNAME||'127.0.0.1'}${process.env.EXPRESS_PORT!=80?':'+process.env.EXPRESS_PORT:''}`))
		}
		catch(cError)
		{
			console.log(cError)
		}
	})
}
catch(cError)
{
	console.log(cError)
}