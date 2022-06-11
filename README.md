## Setting up jekyll 

```
gem install jekyl bundler
```

## Installing gems from Gemfile

```
bundle install
```

## Live reload 

```
bundle exec jekyll serve --livereload
```	


## Content

### FreeBSD

Installation steps

- pkg install vim xorg xfce slim slim-themes
- sysrc dbus_enable=YES
- sysrc hald_enable=YES
- sysrc slim_enable=YES
- sysrc sound_load=YES
- sysrc snd_hda_load=YES
- edit /home/user/.xinitrc 
	exec startxfce4

