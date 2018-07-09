# Node v8.9.0 (LTS)
FROM node:carbon

# �����̳� �� ��ŷ ���丮
WORKDIR /data/app

# ������� ��ġ
COPY package*.json ./
RUN npm install

# �ҽ������ ��������� ���� ���� ��ġ
RUN npm install -g nodemon

CMD [ "npm", "start" ]
