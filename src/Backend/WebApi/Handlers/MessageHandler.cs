using WebApi.Data;
using WebApi.Models;

namespace WebApi.Handlers
{
    public static class MessageHandler
    {
        // Create
        public static Message CreateMessage(string text)
        {
            using(ApplicationDbContext _context = new ApplicationDbContext())
            {
                Message message = new Message
                {
                    Text = text
                };
                _context.Messages.Add(message);
                _context.SaveChanges();

                return message;
            }
        }

        // Read (Single)
        public static Message GetMessageById(int id)
        {
            using(ApplicationDbContext _context = new ApplicationDbContext())
            {
                Message message = _context.Messages.FirstOrDefault(m => m.MessageId == id);
                return message;
            }
        }

        // Read (All)
        public static List<Message> GetAllMessages()
        {
            using(ApplicationDbContext _context = new ApplicationDbContext())
            {
                List<Message> messages = _context.Messages.ToList();
                return messages;
            }
        }

        // Update
        public static Message UpdateMessage(Message message)
        {
            using(ApplicationDbContext _context = new ApplicationDbContext())
            {
                Message existingMessage = _context.Messages.Find(message.MessageId);
                if(existingMessage == null)
                {
                    return null;
                }

                existingMessage.Text = message.Text;
                _context.SaveChanges();

                return existingMessage;
            }
        }

        // Delete
        public static void DeleteMessage(Message message)
        {
            using(ApplicationDbContext _context = new ApplicationDbContext())
            {
                Message existingMessage = _context.Messages.Find(message.MessageId);
                if(existingMessage == null)
                {
                    return;
                }

                _context.Messages.Remove(existingMessage);
                _context.SaveChanges();
            }
        }
    }
}