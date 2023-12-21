import os
import discord
from discord.ext import commands

BotToken = os.environ['BOTTOKEN']
nextRobbery = os.environ['ROBBERYDATE']
bot = commands.Bot(command_prefix='!', intents=discord.Intents.all())


@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')


@bot.event
async def on_member_join(member):
    channel = member.guild.system_channel
    if channel is not None:
        welcome_message = f'Welcome {member.mention} to the Robbery! Do not forget to get your roles from <#channel id>.'
        await channel.send(welcome_message)


@bot.command(name='next_robbery')
async def next_event(ctx):
    await ctx.send(f'Date of the next Robbery {nextRobbery}')


@bot.command(name='meow', help='Says Meow')
async def hello(ctx):
    response = f'Meow'
    await ctx.send(response)

bot.run(BotToken)
