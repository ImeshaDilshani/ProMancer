# Generated by Django 4.1.13 on 2024-05-12 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='thumbnail/images')),
                ('title', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=50)),
                ('description', models.TextField(blank=True, null=True)),
                ('demo', models.CharField(blank=True, max_length=150, null=True)),
            ],
        ),
    ]
