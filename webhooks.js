const express = require('express')
const crypto = require('crypto');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

function run_cmd(cmd, args, cb) {
  var spawn = require('child_process').spawn
  var child = spawn(cmd, args)
  var resq = ''

  child.stdout.on("data", (buffer) => {resq += buffer.toString();})
  child.stdout.on("end", () => {resq += cb(resq)})
}



app.get('/', function (req, res) {
  res.send('Hello World');
});


app.post('/webhooks', function (req, res) {
  console.log(req.body)
  const SECRET_TOKEN = 'jy211985';
  const signature = `sha1=${crypto
    .createHmac('sha1', SECRET_TOKEN)
    .update(JSON.stringify(req.body))
    .digest('hex')}`;
  const isValid = signature === req.headers['x-hub-signature'];
  if (isValid) {
    res.status(200).end('Authorized');
    if(req.body.ref === 'refs/heads/master') {
      console.log('push master')
        debugger;
      let msg = req.body.head_commit.message
      let author = req.body.head_commit.author
      console.log(msg, author)
      if(msg.indexOf('@deploy')>-1) {
        console.log('deploy master')
        run_cmd('sh', ['./deploy.sh'], function(text) {
          console.log(222222)
          console.log(text)
        })
      }
    }
  } else {
    res.status(403).send('Permission Denied');
  }
});

app.listen(9999, function () {
  console.log('app is listening at port 9999');
})



