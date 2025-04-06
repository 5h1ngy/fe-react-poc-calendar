import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
  ModalOverlay, 
  ModalContainer, 
  ModalHeader, 
  ModalBody, 
  FormGroup, 
  FormRow, 
  ModalFooter,
  ActionButtons,
  ColorOptions,
  ColorOption,
  DurationSelector
} from './styles';
import { Button } from '@/components/ui/Button';
import { FiX, FiTrash2 } from 'react-icons/fi';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { addEvent, updateEvent, deleteEvent, CalendarEvent } from '@/store/slices/calendarSlice';

interface EventModalProps {
  event?: CalendarEvent;
  initialDate?: moment.Moment;
  onClose: () => void;
}

const EVENT_COLORS = [
  '#1890ff', // blue
  '#52c41a', // green
  '#fa8c16', // orange
  '#f5222d', // red
  '#722ed1', // purple
  '#eb2f96', // pink
  '#faad14', // yellow
];

const EventModal: React.FC<EventModalProps> = ({ event, initialDate, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState(event?.title || '');
  const [description, setDescription] = useState(event?.description || '');
  const [date, setDate] = useState(
    event ? moment(event.date).format('YYYY-MM-DD') : initialDate ? initialDate.format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')
  );
  const [time, setTime] = useState(
    event ? moment(event.date).format('HH:mm') : initialDate ? initialDate.format('HH:mm') : moment().format('HH:mm')
  );
  const [duration, setDuration] = useState(event?.duration || 30);
  const [color, setColor] = useState(event?.color || EVENT_COLORS[0]);
  
  const handleSave = () => {
    if (!title.trim()) {
      alert(t('calendar.titleRequired'));
      return;
    }
    
    const eventData = {
      title,
      description,
      date: moment(`${date} ${time}`).format(),
      duration,
      color,
    };
    
    if (event) {
      dispatch(updateEvent({
        ...eventData,
        id: event.id,
      }));
    } else {
      dispatch(addEvent(eventData));
    }
    
    onClose();
  };
  
  const handleDelete = () => {
    if (event) {
      if (window.confirm(t('calendar.confirmDelete'))) {
        dispatch(deleteEvent(event.id));
        onClose();
      }
    }
  };
  
  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setDuration(value);
    }
  };
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContainer>
        <ModalHeader>
          <h2>{event ? t('calendar.editEvent') : t('calendar.addEvent')}</h2>
          <button onClick={onClose} aria-label={t('common.close')}>
            <FiX />
          </button>
        </ModalHeader>
        
        <ModalBody>
          <FormGroup>
            <label htmlFor="event-title">{t('calendar.title')}</label>
            <input 
              id="event-title"
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t('calendar.titlePlaceholder')}
              autoFocus
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="event-description">{t('calendar.description')}</label>
            <textarea 
              id="event-description"
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t('calendar.descriptionPlaceholder')}
            />
          </FormGroup>
          
          <FormRow>
            <FormGroup>
              <label htmlFor="event-date">{t('calendar.date')}</label>
              <input 
                id="event-date"
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)}
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="event-time">{t('calendar.time')}</label>
              <input 
                id="event-time"
                type="time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
              />
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <label htmlFor="event-duration">{t('calendar.duration')}</label>
            <DurationSelector>
              <input 
                id="event-duration"
                type="number" 
                min="5" 
                step="5" 
                value={duration} 
                onChange={handleDurationChange}
              />
              <span>{t('calendar.minutes')}</span>
            </DurationSelector>
          </FormGroup>
          
          <FormGroup>
            <label>{t('calendar.color')}</label>
            <ColorOptions>
              {EVENT_COLORS.map((eventColor) => (
                <ColorOption 
                  key={eventColor}
                  $color={eventColor}
                  $selected={color === eventColor}
                  onClick={() => setColor(eventColor)}
                  aria-label={`${t('calendar.selectColor')} ${eventColor}`}
                />
              ))}
            </ColorOptions>
          </FormGroup>
        </ModalBody>
        
        <ModalFooter>
          {event && (
            <Button 
              onClick={handleDelete} 
              variant="danger" 
              leftIcon={<FiTrash2 />}
            >
              {t('calendar.delete')}
            </Button>
          )}
          
          <ActionButtons>
            <Button onClick={onClose} variant="outline">
              {t('common.cancel')}
            </Button>
            <Button onClick={handleSave} variant="primary">
              {t('common.save')}
            </Button>
          </ActionButtons>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default EventModal;
