# Patika.dev Hepsiburada Frontend Bootcamp - Case

[![CircleCI](https://circleci.com/gh/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-fe/tree/main.svg?style=svg&circle-token=d41929e80330e8ab98c3664767bcc6fa82d6939d)](https://circleci.com/gh/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-fe/tree/main)

> Proje, study-case çalışmasının frontend bölümünü içermektedir. Gerekli kurulum adımlarını takip ettikten sonra [backend](https://github.com/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-be) projesinin de kurulumunu yapınız.

[Demoyu görmek için tıklayınız](https://nifty-knuth-903d9d.netlify.app/)

## Kurulum - Local

Uygulamayı localde çalıştırabilmek için:

```
git clone https://github.com/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-fe.git

cd hbcase-berkcvlk-fe
yarn && yarn start
```

## Kurulum - Docker

Uygulamayı container üzerinde çalıştırmak için:

#### Gereklilikler

- Docker
- Docker Compose (isteğe bağlı)

<i>Docker ile</i>

```
// Projeyi klonladıktan sonra
cd hbcase-berkcvlk-fe

docker build -t hbcase-frontend-image .
docker run --name hbcase-frontend-app -d -p 3000:3000 hbcase-frontend-image

// Çalışan container'ı görüntülemek için
docker ps
```

<i>Docker Compose ile</i>

```
// Projeyi klonlayıp anadizine gittikten sonra

// Node modules
yarn install

docker-compose up -d
```

Projeyi <b>localhost:3000</b> 'de görüntülemelisiniz.
Projeyi durdurmak için: `docker-compose down` ya da `docker stop hbcase-frontend-app`

> - Uygulamanın çalışabilmesi için anadizinde `.env` dosyası oluşturup `REACT_APP_API_ENDPOINT` değişkenini oluşturmalısınız.
> - Oluşturduğunuz değişkene [backend reposundaki](https://github.com/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-be) kurulum adımlarından hangisini takip ettiyseniz gerekli endpointi giriniz.

Docker'da oluşturulan image'i silmek için `docker image rm -f hbcase-frontend-image`. Eğer docker-compose ile oluşturduysanız `hbcase-berkcvlk-fe-hbcase-frontend-1`

## Test

### Coverage

![coverage](./figures/testcoverage.png)

Uygulama testlerini çalıştırmak:

```
yarn test
```
