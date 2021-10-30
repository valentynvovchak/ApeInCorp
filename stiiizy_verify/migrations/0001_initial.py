# Generated by Django 3.1.6 on 2021-10-29 06:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='QR',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('serial', models.CharField(max_length=40)),
                ('verifications', models.PositiveIntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('first_verified', models.DateTimeField(blank=True, default=None, null=True)),
            ],
        ),
    ]
