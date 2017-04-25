
# Backup & Restore DB

Best way to seed your DB is through backup and restore.

Following are the commands for the same:

### Backup DB:

    mongodump -d resto-pos -o ./backup-db

It will backup your all collections and metadata from `resto-pos` DB into `./backup-db` directory.

### Restore DB:

    mongorestore -d resto-pos ./backup-db

It will restore your backed up collections and metadata from `./backup-db` directory into `resto-pos` DB.