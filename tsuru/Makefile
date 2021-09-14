TSURU_APP_PREFIX = ad-documentation-front
TSURU_APP_TEAM = gg_adtech_operative

UNAME_S := $(shell uname -s)
ifeq (${UNAME_S}, Darwin)
	DETECTED_OS := darwin
endif
ifeq (${UNAME_S}, Linux)
	DETECTED_OS := linux
endif

define USAGE

Usage:
  make setup

  make terraform-plan-dev
  make terraform-apply-dev
  make terraform-destroy-dev

  make deploy-dev

  make info-dev
  make env-get-dev
  make shell-dev
  make log-dev
  make tail-dev
  make stop-dev
  make start-dev
  make restart-dev
  make acl-list-dev

endef
export USAGE

all:
	@echo "$$USAGE"

setup:
	tsuru plugin-install deploy https://artifactory.globoi.com/artifactory/generic-local/tsuru-deploy-module/deploy
	tsuru plugin-install rpaas http://rpaas-api-fe-cme.cloud.globoi.com/plugin
	tsuru plugin-install acl http://aclfromhell.cloud.globoi.com/plugin/${DETECTED_OS}/acl

terraform-init-%:
	@cd terraform && terraform init -backend-config=username=$$ARTIFACTORY_USER -backend-config=password=$$ARTIFACTORY_APIKEY -backend-config=subpath=${TSURU_APP_TEAM}/$*/${TSURU_APP_PREFIX}-$* -reconfigure

terraform-plan-%:
	make terraform-init-$*
	cd terraform && terraform plan -var-file=$*.tfvars -var-file=$*-secrets.tfvars

terraform-apply-%:
	make terraform-init-$*
	cd terraform && terraform apply -var-file=$*.tfvars -var-file=$*-secrets.tfvars

terraform-destroy-%:
	make terraform-init-$*
	cd terraform && terraform destroy -var-file=$*.tfvars -var-file=$*-secrets.tfvars

deploy-%:
	tsuru app-deploy -a ${TSURU_APP_PREFIX}-$* .

info-%:
	tsuru app-info -a ${TSURU_APP_PREFIX}-$*

env-get-%:
	tsuru env-get -a ${TSURU_APP_PREFIX}-$*

shell-%:
	tsuru app-shell -a ${TSURU_APP_PREFIX}-$*

log-%:
	tsuru app-log -a ${TSURU_APP_PREFIX}-$* -f -l 1000

tail-%:
	tsuru app-log -a ${TSURU_APP_PREFIX}-$* -f -l 1000 --no-date --no-source

stop-%:
	tsuru app-stop -a ${TSURU_APP_PREFIX}-$*

start-%:
	tsuru app-start -a ${TSURU_APP_PREFIX}-$*

restart-%:
	tsuru app-restart -a ${TSURU_APP_PREFIX}-$*

acl-list-%:
	tsuru acl rules list acl ${TSURU_APP_PREFIX}-$*
