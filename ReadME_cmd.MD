When 'Watchpack Error (watcher): Error: ENOSPC: System limit for number of file watchers reached, watch' comes up

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p