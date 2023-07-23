SCHEMA_FILE=/repos/konyu/openapi_rails/contents/doc/openapi.yaml

# github cliでファイルを取得する
gh api $SCHEMA_FILE -H "Accept: application/vnd.github.raw" > docs/openapi.yaml_new

# docs/openapi.yamlが存在しない場合
if [ ! -e docs/openapi.yaml ]; then
  mv docs/openapi.yaml_new docs/openapi.yaml
  exit 0
fi

# docs/openapi.yamlが存在する場合、新旧のファイルに差分があるかチェック
diff -sq docs/openapi.yaml_new docs/openapi.yaml
if [ $? -eq 1 ]; then
  rm docs/openapi.yaml
  mv docs/openapi.yaml_new docs/openapi.yaml
else
  rm docs/openapi.yaml_new
fi
