abrir a pasta admin no vscode e 
rodar o json server: 
```shell
json-server --watch db.json
```

depois rodar: 
```shell
browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
```
