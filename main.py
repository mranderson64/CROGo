import os
import requests
import json
import sys
import time
import nltk
import random
import base64
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.options import Options

path = os.getcwd()

#nltk.download()
#^^ because im a hack

imageSeed = requests.get('https://thispersondoesnotexist.com')
randomSeed = base64.b64encode(imageSeed.content)
#cloudflares lavalamps got nothing on this

getTextJS = open(path + '/getText.js', 'r')
CallToActionsJS = open(path + '/cta.js', 'r')

numberOfGens = 5

nouns = []

options = Options()
options.set_headless(True)
#driver = webdriver.Firefox(options=options)
driver = webdriver.Firefox()

def getSubject(url):
    #get subject of destination webpage
    driver.get(url)
    lines = driver.execute_script(str(getTextJS))
    driver.close()
    # function to test if something is a noun
    is_noun = lambda pos: pos[:2] == 'NN'
    # do the nlp stuff
    tokenized = nltk.word_tokenize(lines)
    nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)]
    print(nouns)

def generations():
    #start generations loop
    i = 0
    while i < numberOfGens:
            web.scrape('https://novi.digital/', 'https://novi.digital/novi-digital-welcomes-funnel-boost-as-new-client/', nouns)
            i+=1

class web:
    def scrape(a, b, c):
        stuff
    def click():
        stuff
    def getCTA():
        stuff

getSubject('https://novi.digital/novi-digital-welcomes-funnel-boost-as-new-client/')
