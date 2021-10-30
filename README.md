# Patika.dev Hepsiburada Frontend Bootcamp - Case

> Proje, study-case çalışmasının frontend bölümünü içermektedir. Gerekli kurulum adımlarını takip ettikten sonra [backend](https://github.com/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-be) projesinin de kurulumunu yapınız.

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
```

<i>Docker Compose ile</i>

```
// Projeyi klonlayıp anadizine gittikten sonra
docker-compose up -d
```

Projeyi <b>localhost:3000</b> 'de görüntülemelisiniz.
Projeyi durdurmak için: `docker-compose down` ya da `docker stop hbcase-frontend-app`

> - Uygulamanın çalışabilmesi için anadizinde `.env` dosyası oluşturup `REACT_APP_API_ENDPOINT` değişkenini oluşturmalısınız.
> - Oluşturduğunuz değişkene [backend reposundaki](https://github.com/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-be) kurulum adımlarından hangisini takip ettiyseniz gerekli endpointi giriniz.

## Test

Uygulama testlerini çalıştırmak:

```
yarn test
```
