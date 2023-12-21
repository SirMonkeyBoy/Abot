FROM python:3.9.18-alpine3.18

ADD Randombot.py .
ADD requirements.txt .

RUN pip install -r requirements.txt

ENV BOTTOKEN ""
ENV ROBBERYDATE ""

CMD ["python", "./Randombot.py"]
