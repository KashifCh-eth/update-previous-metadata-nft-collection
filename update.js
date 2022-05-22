const fs = require('fs');
const path = __dirname + '/metadata';
const buildDescription =(oldvalue,id) => 'codeapachi erc721 ';
const buildName = (oldvalue,id) => 'codeapachi#'+ id;
const buildImageUri =(oldvalue,id) => 'ipfs/QmW7ghT8rwmPGtBGjojEtr5waNBHPrH7m61P2VRUgpFYGu/'+ id +'.png';

const getTokenId = (filepath) => {
    return filepath.match(/([0-9]+)\.json/)[1];
}


fs.readdirSync (path).forEach((fileName)=>{
    const filepath = path +'/'+fileName;
   const stat = fs.statSync(filepath);
   if(! stat.isFile()){
       return;
   }
   if(fileName.endsWith('.json')){
       const jsonContant = require(filepath);
       const tokeId = getTokenId(fileName);

       jsonContant.name = buildName(jsonContant.name,tokeId);
       jsonContant.description = buildDescription(jsonContant.description,tokeId);
       jsonContant.image = buildName(jsonContant.name,tokeId);
       jsonContant.name = buildImageUri(jsonContant.buildImageUri,tokeId);

       fs.writeFileSync(fileName,JSON.stringify(jsonContant,null,2));
   }
});


// power by skillscodified
